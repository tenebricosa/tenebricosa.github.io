import React from 'react';
import styles from './Intro.scss';
import { Link } from 'react-router';

const Intro = () => (
	<div>
		<div className={styles.intro} onClick={() => {console.log('kek')}}>Intro</div>
		<Link to={`/blog`}>Go to blog</Link>
	</div>
);

export default Intro;
