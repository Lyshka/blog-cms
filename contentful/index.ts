import { createClient } from "contentful"
import { envContentful } from "../utils/types"

const client = createClient({
	space: "72v9h5x0hww7",
	accessToken: "h021yzbfQxEufXjAfU4J7zrKP2WXn4uJf1byuhFOjVs"
})

export default client