/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as Modes from 'vs/editor/common/modes';

export interface ICommentsSupportContribution {
	commentsConfiguration: Modes.ICommentsConfiguration;
}

export class CommentsSupport implements Modes.IRichEditComments {

	private _contribution: ICommentsSupportContribution;

	constructor(contribution:ICommentsSupportContribution) {
		this._contribution = contribution;
	}

	public getCommentsConfiguration(): Modes.ICommentsConfiguration {
		return this._contribution.commentsConfiguration;
	}

}