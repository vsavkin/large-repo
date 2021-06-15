import { render } from '@testing-library/react';

import App17component30 from './app17component30';

describe('App17component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component30 />);
    expect(baseElement).toBeTruthy();
  });
});
