import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export function Chat() {
	return (
		<ChatEngine
			height='100vh'
			userName='hadar'
			userSecret='GoogleRULZ'
			projectID='211b745d-35af-4172-b62a-f82fb26af3bb'
		/>
	);
}
