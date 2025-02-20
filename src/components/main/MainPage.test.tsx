import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Main } from './Main';
import { useGetCharactersQuery } from '../../api/api';
import { vi, Mock } from 'vitest';

vi.mock('../../api/api', () => ({
  useGetCharactersQuery: vi.fn(),
}));

vi.mock('next/router', () => ({
  useRouter: () => ({
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: vi.fn(),
    beforePopState: vi.fn(),
    prefetch: vi.fn(),
    push: vi.fn(),
    reload: vi.fn(),
    replace: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    forward: vi.fn(),
  }),
}));

describe('Main Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render the SearchForm', () => {
    (useGetCharactersQuery as Mock).mockReturnValue({
      data: null,
      isFetching: true,
    });
    render(<Main />);

    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('should render Loader when fetching data', () => {
    (useGetCharactersQuery as Mock).mockReturnValue({
      data: null,
      isFetching: true,
    });

    render(<Main />);
    const loader = document.getElementById('loader');
    expect(loader).toBeInTheDocument();
  });
});
