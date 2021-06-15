import { render } from '@testing-library/react';

import App17component23 from './app17component23';

describe('App17component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component23 />);
    expect(baseElement).toBeTruthy();
  });
});
