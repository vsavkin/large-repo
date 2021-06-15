import { render } from '@testing-library/react';

import App10component2 from './app10component2';

describe('App10component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component2 />);
    expect(baseElement).toBeTruthy();
  });
});
