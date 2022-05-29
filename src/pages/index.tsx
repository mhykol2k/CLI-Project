import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';

interface IndexPageProps {
    inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
    const containerRef = React.useRef(null);
    const {
        history,
        command,
        lastCommandIndex,
        setCommand,
        setHistory,
        clearHistory,
        setLastCommandIndex,
    } = useHistory([]);

    const init = React.useCallback(() => setHistory(banner()), []);

    React.useEffect(() => {
        init();
    }, [init]);

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView();
            inputRef.current.focus({ preventScroll: true });
        }
    }, [history]);

    return (
        <>
            <Head>
                <title>{config.title}</title>
            </Head>

            <div
                id="Selection"
                className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow"
            >
                <div ref={containerRef} className="overflow-y-auto h-full">
                    <History history={history} />
                    <Input
                        inputRef={inputRef}
                        containerRef={containerRef}
                        command={command}
                        history={history}
                        lastCommandIndex={lastCommandIndex}
                        setCommand={setCommand}
                        setHistory={setHistory}
                        setLastCommandIndex={setLastCommandIndex}
                        clearHistory={clearHistory}
                    />
                </div>
                <section
                    id="help"
                    className="invisible lg:visible absolute text-center top-6 w-64 pl-4 pr-4 pb-4 pt-1 right-10 right overflow-hidden h-30 rounded-xl border-2 border-light yellow dark:border-dark-yellow"
                >
                    Commands
                    <ol>CV</ol>
                    <ol>Sum</ol>
                    <ol>GitHub</ol>
                    <ol>Email</ol>
                    <ol>Socials</ol>
                </section>
            </div>
        </>
    );
};

export default IndexPage;
