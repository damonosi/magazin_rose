import axios from "axios";


export async function fetcher(resource) {
	let result;
	try {
		result = await axios.get(resource).then((r) => r.data);
	} catch (e) {
		console.log("***** Problem with fetch that results in an exception");
		console.error(e);
		throw new Error("Invalid Response");
	}
	if (result) {
		try {
			return await result;
		} catch (e) {
			console.log("***** Problem with JSON payload", e);
			throw "Result OK but JSON borked";
		}
	} else {
		console.log("****** Result ! OK", result.status, result.statusText);
		throw result.statusText;
	}
}
