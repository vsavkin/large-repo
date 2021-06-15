import { render } from '@testing-library/react';

import App17component4 from './app17component4';

describe('App17component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component4 />);
    expect(baseElement).toBeTruthy();
  });
});
