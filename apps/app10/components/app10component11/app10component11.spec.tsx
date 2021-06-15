import { render } from '@testing-library/react';

import App10component11 from './app10component11';

describe('App10component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component11 />);
    expect(baseElement).toBeTruthy();
  });
});
