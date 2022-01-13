import React, { useCallback, useState } from "react";
import Button from "../src/components/Button";

const Code = ({ code }) => (
	<pre>
		<code>{JSON.stringify(code, null, 4)}</code>
	</pre>
);
// React internal hooks
// useState
// useEffect
// useMemo
// useRef
// useContext
// useReducer
// use LayoutEffect
// useCallBack
// useImperativeHandle
// useDebugValue

const usePerson = () => {
	return { name: "Gregor" };
};

const App = () => {
	const [state, setState] = useState("Gregor");
	const handleClick = useCallback(() => {
		console.log("Hello!");
	}, []);
	const { name } = usePerson();
	return (
		<div>
			<Code code={name} />

		</div>
	);
};

export default App;
