import { render } from '@testing-library/react';

import App12component6 from './app12component6';

describe('App12component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component6 />);
    expect(baseElement).toBeTruthy();
  });
});
