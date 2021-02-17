import React from 'react';
import i18n from 'i18next';

const OverviewComponent = (props) => {
	return (
		<div>{i18n.t('overview')}</div>
	);
};

export default OverviewComponent;