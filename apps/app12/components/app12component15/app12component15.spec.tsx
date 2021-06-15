import { render } from '@testing-library/react';

import App12component15 from './app12component15';

describe('App12component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component15 />);
    expect(baseElement).toBeTruthy();
  });
});
