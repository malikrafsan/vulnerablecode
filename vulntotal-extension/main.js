const main = async () => {
  let pyodide = await loadPyodide();
  // Pyodide is now ready to use...
  console.log(pyodide.runPython(`
    import sys
    sys.version
  `));

  const numberInput = document.getElementById('num');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const num = numberInput.value;
    console.log(pyodide.runPython(`
      import math
      math.factorial(${num})
    `));
  })

  const fetched = await fetch("simple.py").then(response => response.text());
  console.log(fetched);
  pyodide.runPython(fetched);
};
main();
