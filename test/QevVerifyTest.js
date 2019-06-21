const assert = require('assert'),
	qev = require('../lib/index');

const api_key = process.env.apikey;
const quickemailverification = qev.client(api_key).quickemailverification();

describe('Test Cases', function () {
	it('testVerifyValidEmail', function () {
	    quickemailverification.sandbox('valid@example.com', function (err, response) {
			qevResponse = response.body;
			assert.equal(response.code, 200);
			assert.equal(qevResponse.result, 'valid');
			assert.equal(qevResponse.reason, 'accepted_email');
			assert.equal(qevResponse.disposable, 'true');
			assert.equal(qevResponse.accept_all, 'true');
			assert.equal(qevResponse.role, 'false');
			assert.equal(qevResponse.free, 'false');
			assert.equal(qevResponse.email, 'valid@example.com');
			assert.equal(qevResponse.user, 'valid');
			assert.equal(qevResponse.domain, 'example.com');
			assert.equal(qevResponse.mx_record, null);
			assert.equal(qevResponse.mx_domain, '');
			assert.equal(qevResponse.safe_to_send, 'false');
			assert.equal(qevResponse.did_you_mean, '');
			assert.equal(qevResponse.success, 'true');
		});
	});
	it('testVerifySafeToSendEmail', function () {
			quickemailverification.sandbox('safe-to-send@example.com', function (err, response) {
			qevResponse = response.body;
			assert.equal(response.code, 200);
			assert.equal(qevResponse.result, 'valid');
			assert.equal(qevResponse.reason, 'accepted_email');
			assert.equal(qevResponse.disposable, 'false');
			assert.equal(qevResponse.accept_all, 'false');
			assert.equal(qevResponse.role, 'false');
			assert.equal(qevResponse.free, 'false');
			assert.equal(qevResponse.email, 'safe-to-send@example.com');
			assert.equal(qevResponse.user, 'safe-to-send');
			assert.equal(qevResponse.domain, 'example.com');
			assert.equal(qevResponse.mx_record, null);
			assert.equal(qevResponse.mx_domain, '');
			assert.equal(qevResponse.safe_to_send, 'true');
			assert.equal(qevResponse.did_you_mean, '');
			assert.equal(qevResponse.success, 'true');
		});
	});
	it('testVerifyRejectedEmail', function () {
		quickemailverification.sandbox('rejected-email@example.com', function (err, response) {
			qevResponse = response.body;
			assert.equal(response.code, 200);
			assert.equal(qevResponse.result, 'invalid');
			assert.equal(qevResponse.reason, 'rejected_email');
			assert.equal(qevResponse.disposable, 'false');
			assert.equal(qevResponse.accept_all, 'false');
			assert.equal(qevResponse.role, 'false');
			assert.equal(qevResponse.free, 'false');
			assert.equal(qevResponse.email, 'rejected-email@example.com');
			assert.equal(qevResponse.user, 'rejected-email');
			assert.equal(qevResponse.domain, 'example.com');
			assert.equal(qevResponse.mx_record, null);
			assert.equal(qevResponse.mx_domain, '');
			assert.equal(qevResponse.safe_to_send, 'false');
			assert.equal(qevResponse.did_you_mean, '');
			assert.equal(qevResponse.success, 'true');
		});
	});
	it('testVerifyDidYouMean', function () {
		quickemailverification.sandbox('did-you-mean@example.com', function (err, response) {
			qevResponse = response.body;
			assert.equal(response.code, 200);
			assert.equal(qevResponse.result, 'invalid');
			assert.equal(qevResponse.reason, 'rejected_email');
			assert.equal(qevResponse.disposable, 'false');
			assert.equal(qevResponse.accept_all, 'false');
			assert.equal(qevResponse.role, 'false');
			assert.equal(qevResponse.free, 'false');
			assert.equal(qevResponse.email, 'did-you-mean@example.com');
			assert.equal(qevResponse.user, 'did-you-mean');
			assert.equal(qevResponse.domain, 'example.com');
			assert.equal(qevResponse.mx_record, null);
			assert.equal(qevResponse.mx_domain, '');
			assert.equal(qevResponse.safe_to_send, 'false');
			assert.equal(qevResponse.did_you_mean, 'did-you-mean@example.com');
			assert.equal(qevResponse.success, 'true');
		});
	});
	it('testVerifyTimeout', function () {
		quickemailverification.sandbox('timeout@example.com', function (err, response) {
			qevResponse = response.body;
			assert.equal(response.code, 200);
			assert.equal(qevResponse.result, 'unknown');
			assert.equal(qevResponse.reason, 'timeout');
			assert.equal(qevResponse.disposable, 'false');
			assert.equal(qevResponse.accept_all, 'false');
			assert.equal(qevResponse.role, 'false');
			assert.equal(qevResponse.free, 'false');
			assert.equal(qevResponse.email, 'timeout@example.com');
			assert.equal(qevResponse.user, 'timeout');
			assert.equal(qevResponse.domain, 'example.com');
			assert.equal(qevResponse.mx_record, null);
			assert.equal(qevResponse.mx_domain, '');
			assert.equal(qevResponse.safe_to_send, 'false');
			assert.equal(qevResponse.did_you_mean, '');
			assert.equal(qevResponse.success, 'true');
		});
	});
	it('testVerifyUnavailableSMTP', function () {
		quickemailverification.sandbox('unavailable-smtp@example.com', function (err, response) {
			qevResponse = response.body;
			assert.equal(response.code, 200);
			assert.equal(qevResponse.result, 'unknown');
			assert.equal(qevResponse.reason, 'unavailable_smtp');
			assert.equal(qevResponse.disposable, 'false');
			assert.equal(qevResponse.accept_all, 'false');
			assert.equal(qevResponse.role, 'false');
			assert.equal(qevResponse.free, 'false');
			assert.equal(qevResponse.email, 'unavailable-smtp@example.com');
			assert.equal(qevResponse.user, 'unavailable-smtp');
			assert.equal(qevResponse.domain, 'example.com');
			assert.equal(qevResponse.mx_record, null);
			assert.equal(qevResponse.mx_domain, '');
			assert.equal(qevResponse.safe_to_send, 'false');
			assert.equal(qevResponse.did_you_mean, '');
			assert.equal(qevResponse.success, 'true');
		});
	});
	it('testVerifyTemporarilyBlocked', function () {
		quickemailverification.sandbox('temporarily-blocked@example.com', function (err, response) {
			qevResponse = response.body;
			assert.equal(response.code, 200);
			assert.equal(qevResponse.result, 'unknown');
			assert.equal(qevResponse.reason, 'temporarily_blocked');
			assert.equal(qevResponse.disposable, 'false');
			assert.equal(qevResponse.accept_all, 'false');
			assert.equal(qevResponse.role, 'false');
			assert.equal(qevResponse.free, 'false');
			assert.equal(qevResponse.email, 'temporarily-blocked@example.com');
			assert.equal(qevResponse.user, 'temporarily-blocked');
			assert.equal(qevResponse.domain, 'example.com');
			assert.equal(qevResponse.mx_record, null);
			assert.equal(qevResponse.mx_domain, '');
			assert.equal(qevResponse.safe_to_send, 'false');
			assert.equal(qevResponse.did_you_mean, '');
			assert.equal(qevResponse.success, 'true');
		});
	});
	it('testVerifyAcceptAll', function () {
		quickemailverification.sandbox('accept-all@example.com', function (err, response) {
			qevResponse = response.body;
			assert.equal(response.code, 200);
			assert.equal(qevResponse.result, 'valid');
			assert.equal(qevResponse.reason, 'accepted_email');
			assert.equal(qevResponse.disposable, 'false');
			assert.equal(qevResponse.accept_all, 'true');
			assert.equal(qevResponse.role, 'false');
			assert.equal(qevResponse.free, 'false');
			assert.equal(qevResponse.email, 'accept-all@example.com');
			assert.equal(qevResponse.user, 'accept-all');
			assert.equal(qevResponse.domain, 'example.com');
			assert.equal(qevResponse.mx_record, null);
			assert.equal(qevResponse.mx_domain, '');
			assert.equal(qevResponse.safe_to_send, 'false');
			assert.equal(qevResponse.did_you_mean, '');
			assert.equal(qevResponse.success, 'true');
		});
	});
	it('testVerifyDisposable', function () {
	    quickemailverification.sandbox('disposable@example.com', function (err, response) {
			qevResponse = response.body;
			assert.equal(response.code, 200);
			assert.equal(qevResponse.result, 'valid');
			assert.equal(qevResponse.reason, 'accepted_email');
			assert.equal(qevResponse.disposable, 'true');
			assert.equal(qevResponse.accept_all, 'false');
			assert.equal(qevResponse.role, 'false');
			assert.equal(qevResponse.free, 'false');
			assert.equal(qevResponse.email, 'disposable@example.com');
			assert.equal(qevResponse.user, 'disposable');
			assert.equal(qevResponse.domain, 'example.com');
			assert.equal(qevResponse.mx_record, null);
			assert.equal(qevResponse.mx_domain, '');
			assert.equal(qevResponse.safe_to_send, 'false');
			assert.equal(qevResponse.did_you_mean, '');
			assert.equal(qevResponse.success, 'true');
		});
	});
	it('testVerifyLowCredit', function () {
	    quickemailverification.sandbox('low-credit@example.com', function (err, response) {
			qevResponse = response.body;
			assert.equal(response.code, 402);
			assert.equal(qevResponse.success, 'false');
			assert.equal(qevResponse.message, 'Low credit. Payment required');
		});
	});
});
