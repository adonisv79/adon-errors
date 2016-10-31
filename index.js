"use strict";

module.exports = {
	throw: throwError,
	command: {
		CommandError: require('./errors/command/CommandError'),
		CommandInvalidError: require('./errors/command/CommandInvalidError'),
		CommandNotFoundError: require('./errors/command/CommandNotFoundError')
	},
	database: {
		DatabaseError: require('./errors/database/DatabaseError'),
		connection: {
			DatabaseConnectionError: require('./errors/database/connection/DatabaseConnectionError'),
			DatabaseConnectionRejectedError: require('./errors/database/connection/DatabaseConnectionRejectedError'),
		},
		result: {
			DatabaseResultCreateError: require('./errors/database/result/DatabaseResultCreateError'),
			DatabaseResultDisabledError: require('./errors/database/result/DatabaseResultDisabledError'),
			DatabaseResultError: require('./errors/database/result/DatabaseResultError'),
			DatabaseResultNotFoundError: require('./errors/database/result/DatabaseResultNotFoundError'),
			DatabaseResultUniqueCollisionError: require('./errors/database/result/DatabaseResultUniqueCollisionError'),
		}
	},
	input: {
		InputError: require('./errors/input/InputError'),
		InputRequiredError: require('./errors/input/InputRequiredError'),
		InputValidationError: require('./errors/input/InputValidationError'),
	},
	security: {
		SecurityError: require('./errors/security/SecurityError'),
		authentication: {
			AuthenticationError: require('./errors/security/authentication/AuthenticationError'),
		},
		authorization: {
			AuthorizationError: require('./errors/security/authorization/AuthorizationError'),
			AuthorizationAccessError: require('./errors/security/authorization/AuthorizationAccessError'),
		}
	},
	server: {
		ServerError: require('./errors/server/ServerError'),
	},
	session: {
		SessionError: require('./errors/session/SessionError'),
		SessionNotFoundError: require('./errors/session/SessionNotFoundError')
	}
}

/**
 * Work in progress! this will throw an error based on the error type
 * @param error_type an available adon-error type, defaults to a standard Error
 * @param message the error message
 */
function throwError (error_type, message){
	throw new Error(message);
}