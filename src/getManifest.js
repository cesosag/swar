/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'

const getManifest = () => {
	try {
		return JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'dist/manifest.json')))
	} catch (err) {
		console.log(err)
		return err
	}
}

export default getManifest
