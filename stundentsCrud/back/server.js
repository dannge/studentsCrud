const mongoose = require('mongoose');
const app = require('./app');

const DB = 'mongodb+srv://dange:jFQCUxJb8q8YoeEY@cluster0.ikxv8.mongodb.net/student-db?retryWrites=true&w=majority';
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => {
		console.log('Prisijungta prie DB...:)');
	});

const port = 4000;
app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
