import ReactDOM from 'react-dom/client';
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
const element =
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
root.render(element);