const contentfulManagement = require("contentful-management")

module.exports = function () {
	const contentfulClient = contentfulManagement.createClient({
		accessToken: "CFPAT-6iuVC110Ez5BASXrs1XcdT3NZGJE6P8wqFhPZ1I2Ggk",
	})

	return contentfulClient
		.getSpace("72v9h5x0hww7")
		.then(space => space.getEnvironment("master"))
}