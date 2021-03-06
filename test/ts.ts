import fs from 'fs';
import path from 'path';

import del from 'del';

console.log(del);

interface User {
	hoge: string;
	fuga: string;
}

export const hoge = (users: User[]): void => {
	fs.writeFile(
		path.resolve(__dirname, '../tmp'),
		JSON.stringify(users.map((user) => user.hoge)),
		(err) => {
			if (err !== null) {
				console.error(err); // eslint-disable-line no-console
			}
		},
	);
};
