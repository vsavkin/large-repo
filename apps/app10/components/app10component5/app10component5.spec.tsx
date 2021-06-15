import { render } from '@testing-library/react';

import App10component5 from './app10component5';

describe('App10component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component5 />);
    expect(baseElement).toBeTruthy();
  });
});
