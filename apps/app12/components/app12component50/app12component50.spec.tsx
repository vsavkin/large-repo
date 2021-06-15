import { render } from '@testing-library/react';

import App12component50 from './app12component50';

describe('App12component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component50 />);
    expect(baseElement).toBeTruthy();
  });
});
