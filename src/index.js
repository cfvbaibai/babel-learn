const componentScript = `
const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this.";
  }

  return <button onClick={() => setLiked(true)}>Like Me!</button>;
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<LikeButton />, domContainer);
`;

const output = Babel.transform(componentScript, { presets: ['env', 'react'] }).code;
console.log(output);

eval(output);
