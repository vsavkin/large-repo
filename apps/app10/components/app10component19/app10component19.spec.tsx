import { render } from '@testing-library/react';

import App10component19 from './app10component19';

describe('App10component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component19 />);
    expect(baseElement).toBeTruthy();
  });
});
