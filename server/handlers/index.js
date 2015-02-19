module.exports = function(request, reply) {
	reply.view('index', {stuff: 'BOOTH INDEX'});
};