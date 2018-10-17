import * as Sentry from '@sentry/browser';

class ErrorLogger extends Component {
    constructor(props){
        super(props);
        this.state = { error: null };
    }

    componentDidCatch(error, errorInfo){
        this.SVGElementInstanceList({ error });
        Sentry.configureScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key]);
            });
        });
        Sentry.captureException(error);
    }

    render(){
        if (this.state.error){
            return (
                <a onClick={() => Sentry.showReportDialog()}>Report error to System Administrator</a>
            );
        }
        return this.props.children;
    }
}