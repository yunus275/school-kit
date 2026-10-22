import { type ReactNode, useState } from 'react';
import { ArrowDownToLine, CircleDot, MonitorPlay } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();
const boardArtwork = `${import.meta.env.BASE_URL}board-reference.png`;
const boardKitArchive = `${import.meta.env.BASE_URL}Aymen_Schoolboard_EXE_Kit.zip`;

function Home() {
  const [downloadMessage, setDownloadMessage] = useState('');

  const downloadBoard = () => {
    const anchor = document.createElement('a');
    anchor.href = boardKitArchive;
    anchor.download = 'Aymen_Schoolboard_EXE_Kit.zip';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setDownloadMessage('Your schoolboard kit ZIP download is starting.');
  };

  return (
    <main className="page-shell" data-testid="page-smart-board">
      <div className="decor-orb decor-orb--cyan" aria-hidden="true" />
      <div className="decor-orb decor-orb--yellow" aria-hidden="true" />
      <div className="dot-field dot-field--top" aria-hidden="true" />
      <div className="dot-field dot-field--bottom" aria-hidden="true" />

      <header className="topbar">
        <div className="brand-mark" aria-label="Classroom Board">
          <span className="brand-icon"><MonitorPlay size={17} strokeWidth={2.4} /></span>
          <span>Classroom / 01</span>
        </div>
        <span className="top-note">A familiar board, made shareable</span>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-heading">
          <span className="eyebrow">Front of the class</span>
          <h1 className="hero-title" id="page-title">
            Normal <span className="title-accent">Smart</span><br />Board
          </h1>
          <p className="hero-subtitle">A little classroom nostalgia, ready for the big screen.</p>
        </div>

        <div className="showcase">
          <span className="board-caption" aria-hidden="true">Classroom display</span>
          <div className="board-frame">
            <div className="board-screen">
              <img
                src={boardArtwork}
                alt="Illustration of a tilted classroom smart board with chalk lettering and a colorful stylus against a navy background"
                data-testid="img-board-artwork"
              />
            </div>
            <span className="frame-indicator" aria-label="Board powered on" />
            <span className="frame-slot" aria-hidden="true" />
          </div>
        </div>

        <div className="board-actions">
          <button
            className="download-button"
            type="button"
            onClick={downloadBoard}
            aria-label="Download the Aymen Schoolboard EXE Kit as a ZIP file"
            data-testid="button-download-board"
          >
            <ArrowDownToLine aria-hidden="true" />
            <span>Download the board kit (.zip)</span>
          </button>
        </div>
        <p className="download-state" role="status" aria-live="polite" data-testid="status-download">
          {downloadMessage}
        </p>

        <footer className="footer">
          <span className="credit" data-testid="text-author-credit">Made for the classroom <strong>by dc_fighter</strong></span>
          <span className="footer-note"><CircleDot size={10} aria-hidden="true" /> &nbsp; Chalk, pixels &amp; good ideas</span>
        </footer>
      </section>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
