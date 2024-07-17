import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { loadPyodide } from 'pyodide';
import { useParams } from 'react-router-dom';
import { fetchChallenge } from '../api/axios';

const PythonCodeEditor = () => {
    const { testId } = useParams();
    const [code, setCode] = useState("# Write your Python code here\n");
    const [output, setOutput] = useState("Your output will appear here...");
    const [testDetails, setTestDetails] = useState(null);
    const [testResults, setTestResults] = useState([]);
    const [pyodideInstance, setPyodideInstance] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('description'); // State to manage active tab

    useEffect(() => {
        const initializePyodideAndFetchData = async () => {
            setLoading(true);
            try {
                const pyodide = await loadPyodide({
                    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full'
                });
                setPyodideInstance(pyodide);
                const fetchedTestDetails = await fetchChallenge(testId);
                setTestDetails(fetchedTestDetails.data[0]);
            } catch (error) {
                setOutput(`Initialization failed: ${error.message}`);
            }
            setLoading(false);
        };
        initializePyodideAndFetchData();
    }, [testId]);

    const runCode = async () => {
        if (!pyodideInstance || !testDetails) return;

        setLoading(true);
        const results = [];
        try {
            await pyodideInstance.loadPackage('micropip');
            await pyodideInstance.runPythonAsync(`
                import io
                import sys
                sys.stdout = io.StringIO()  # Redirect stdout to capture print statements
            `);
            for (const { testCase, expectedOutput } of testDetails.testCases) {
                await pyodideInstance.runPythonAsync(code + `\n${testCase}`);
                const actualOutput = pyodideInstance.runPython('sys.stdout.getvalue()').trim();
                const success = actualOutput === expectedOutput.trim();
                results.push({
                    testCase,
                    expectedOutput,
                    actualOutput,
                    success
                });
                pyodideInstance.runPython('sys.stdout.truncate(0)');  // Clear previous output
                pyodideInstance.runPython('sys.stdout.seek(0)');
            }
            setOutput("Test results are displayed below.");
            setTestResults(results);
        } catch (err) {
            setOutput(err.toString());
        }
        setLoading(false);
    };

    const handleEditorChange = (value) => {
        setCode(value);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:w-1/2 h-[100vh] p-4 text-white bg-gray-800">
                <div className="ml-[15%] flex self-center justify-between text-sm bg-gray-100 bg-opacity-10 p-2 rounded-full w-fit  gap-20">
                    <button onClick={() => handleTabChange('description')} className={`px-2 bg-opacity-80 w-28 rounded-full ${activeTab === 'description' ? 'bg-orange-500' : ''}`}>Description</button>
                    <button onClick={() => handleTabChange('learn')} className={`p-2 bg-opacity-80 w-28 rounded-full ${activeTab === 'learn' ? 'bg-orange-500' : ''}`}>Learn</button>
                    <button onClick={() => handleTabChange('solution')} className={`p-2 w-28 bg-opacity-80 rounded-full ${activeTab === 'solution' ? 'bg-orange-500' : ''}`}>Solution</button>
                </div>
                <div className='bg-white m-4 p-8 text-xl pt-10 rounded-md h-[85vh] overflow-scroll text-black'>
                {activeTab === 'description' && <p>{testDetails?.description || "Loading test details..."}</p>}
                {activeTab === 'learn' && <p>{testDetails?.learn || "Loading learning content..."}</p>}
                {activeTab === 'solution' && <pre className="whitespace-pre-wrap">{testDetails?.solution || "Loading solution..."}</pre>}
                </div>
                
            </div>
            <div className="md:w-1/2 flex flex-col p-4 bg-gray-900 text-white">
                <Editor
                    height="50vh"
                    defaultLanguage="python"
                    defaultValue={code}
                    onChange={handleEditorChange}
                    theme="vs-dark"
                />
                <div className="flex gap-4 my-4">
                    <button
                        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
                        onClick={runCode}
                        disabled={loading}
                    >
                        {loading ? "Running Tests..." : "Run Code"}
                    </button>
                </div>
                <h2 className="text-xl font-bold mb-2">Output</h2>

                <div className="bg-gray-800 p-4 rounded font-mono overflow-scroll">
                    <p className="whitespace-pre-wrap bg-black p-4 rounded-md">{output}</p>

                    {testResults.map((result, index) => (
                        <div key={index} className="bg-black p-4 rounded my-2">
                            <p><strong>Test Case:</strong> {result.testCase}</p>
                            <p><strong>Expected Output:</strong> {result.expectedOutput}</p>
                            <p><strong>Actual Output:</strong> {result.actualOutput}</p>
                            <p style={{ color: result.success ? 'green' : 'red' }}>
                                {result.success ? 'Passed' : 'Failed'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PythonCodeEditor;
