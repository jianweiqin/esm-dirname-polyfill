import path from "path";
import {fileURLToPath} from "url";

export default function (importMeta) {
	const __filename = fileURLToPath(importMeta.url);
	const __dirname = path.dirname(__filename);

	// polyfill
	if (!importMeta.filename) { importMeta.filename = __filename;}
	if (!importMeta.dirname) { importMeta.dirname = __dirname;}

	return {__dirname, __filename};
}
