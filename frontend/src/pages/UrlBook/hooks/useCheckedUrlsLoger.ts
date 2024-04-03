import { useEffect } from "react"
import { useUrlStore } from "../store"

export const useCheckedUrlsLogger = () => {
	const urls = useUrlStore((state) => state.urls)
	useEffect(() => {
		const checkedUrls = urls.filter((item) => item.checked)
		console.log('Checked URLs:', checkedUrls)
		
	}, [urls])
}