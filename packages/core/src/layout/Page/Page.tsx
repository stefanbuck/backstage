/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC } from 'react';
import { BackstageTheme } from '@backstage/theme';
import { makeStyles, ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateAreas:
      "'pageHeader pageHeader pageHeader' 'pageSubheader pageSubheader pageSubheader' 'pageNav pageContent pageSidebar'",
    gridTemplateRows: 'auto auto 1fr',
    gridTemplateColumns: 'auto 1fr auto',
    minHeight: '100vh',
  },
}));

type Props = {
  themeId: string;
};

export const Page: FC<Props> = ({ themeId, children }) => {
  const classes = useStyles();
  return (
    <ThemeProvider
      theme={(baseTheme: BackstageTheme) => ({
        ...baseTheme,
        page: baseTheme.getPageTheme({ themeId }),
      })}
    >
      <div className={classes.root}>{children}</div>
    </ThemeProvider>
  );
};
