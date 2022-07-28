To demonstrate the issue:

```shell
npm install

# Verify that version 14 of user-event is installed. 
npm ls @testing-library/user-event

# Launch storybook
npm run storybook
```

The story that opens should have the input focused (with a cursor) and "foo" should be written inside.  

Instead, it will look focused (have a dark border), not not have a flashing cursor, and the text is not pasted.

To see the behavior in V13, add this to the `package.json`:

```json
"overrides": {
  "@testing-library/user-event": "13.5.0"
}
```

Then `npm install`, comment out `userEvent.paste('foo')` in `Input.stories.tsx` (the api of `.paste()` has changed) and restart storybook `npm run storybook`.  You'll see that the input is properly focused now.
