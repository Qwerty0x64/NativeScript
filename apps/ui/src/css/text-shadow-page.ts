﻿import { EventData, TextBase } from '@nativescript/core';

const possibleValues = ['2 10 4 rgb(255, 100, 100)', '2 10 2 rgba(10, 10, 10, 0.5)', '1 1 1 #55a', '2 2 2 #aaa', ''];
let currentIndex = 0;

export function butonTap(args: EventData) {
	let page = (<TextBase>args.object).page;
	let lbl = <TextBase>page.getViewById('Label');
	let btn = <TextBase>page.getViewById('Button');
	let textField = <TextBase>page.getViewById('TextField');
	let textView = <TextBase>page.getViewById('TextView');

	let newIndex = currentIndex++ % possibleValues.length;
	let newValue = <any>possibleValues[newIndex];

	lbl.textShadow = newValue;
	btn.textShadow = newValue;
	textField.textShadow = newValue;
	textView.textShadow = newValue;

	if (lbl.text === 'Change text') {
		lbl.text = btn.text = textField.text = textView.text = 'Text changed';
	} else {
		lbl.text = btn.text = textField.text = textView.text = 'Change text';
	}
}