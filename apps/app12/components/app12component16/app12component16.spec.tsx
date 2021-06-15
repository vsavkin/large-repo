import { render } from '@testing-library/react';

import App12component16 from './app12component16';

describe('App12component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component16 />);
    expect(baseElement).toBeTruthy();
  });
});
