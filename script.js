//your JS code here. If required.
async function fetchData(){
	const data= await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const res= await data.json();
	console.log(res);
}
fetchData()