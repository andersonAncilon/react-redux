import React from 'react';

import { connect } from 'react-redux';

const Video = ({ activeLesson, activeModule }) => (
	<div>
		<strong>Módulo {activeModule.title}</strong>
		<p />
		<span>Aula {activeLesson.title}</span>
		<p />
	</div>
);

export default connect((state) => ({
	activeLesson: state.course.activeLesson,
	activeModule: state.course.activeModule
}))(Video);
