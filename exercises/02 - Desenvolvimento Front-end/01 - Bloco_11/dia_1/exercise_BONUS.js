function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.featureImage} alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary">Learn more</a>
            </div>
        </div>
    );
}

function CardList() {
    return (
        <div className="row">
            <div className="col-sm-4">
                <Card
                    featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
                    title="How To Make Interactive ReactJS Form"
                    description="Let's write some interactive form with React"
                    link="https://sebhastian.com/interactive-react-form"
                />
            </div>
            <div className="col-sm-4">
                <Card
                    featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
                    title="Babelify your JavaScript code"
                    description="Babel make JavaScript code browser-compatible."
                    link="https://sebhastian.com/babel-guide"
                />
            </div>
            <div className="col-sm-4">
                <Card
                    featureImage="https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png"
                    title="JavaScript Basics Before You Learn React"
                    description="Learn the prerequisites of learning React fast"
                    link="https://sebhastian.com/js-before-react"
                />
            </div>

            <div className="col-sm-4">
                <Card
                    featureImage="https://camo.githubusercontent.com/fb3a8090c6b4dcd4bbeff960684be90d279fffd0da846e6034b1b485bdff46da/68747470733a2f2f7777772e736f6d61676e6577732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f30342f37352d65313538363938313436353236332e706e67"
                    title="Git Hub code versioner"
                    description="Best site for versioning source code."
                    link="https://github.com/"
                />
            </div>

            <div className="col-sm-4">
                <Card
                    featureImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    title=" library for building user interfaces"
                    description="A JavaScript library for building user interfaces"
                    link="https://pt-br.reactjs.org/"
                />
            </div>
        </div>
    );
}

ReactDOM.render(<CardList />, document.getElementById('root'))
