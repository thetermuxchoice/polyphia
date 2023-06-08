const {
  colors,
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  createTheme,
  Box,
  SvgIcon,
  Link,
  Pagination,
  Stack
} = MaterialUI;

const Items = [
    <table style="margin-left: -10vh;">
        <tbody>
            <th>
                <div class="wrapper">
                <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                    <div class="left">
                        <div class="details">
                        <h1>Chair</h1>
                        <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                        <h1>Chair</h1>
                        <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                    <table>
                        <tr>
                        <th>Width</th>
                        <th>Height</th>
                        </tr>
                        <tr>
                        <td>3000mm</td>
                        <td>4000mm</td>
                        </tr>
                        <tr>
                        <th>Something</th>
                        <th>Something</th>
                        </tr>
                        <tr>
                        <td>200mm</td>
                        <td>200mm</td>
                        </tr>
                        <tr>
                        <th>Something</th>
                        <th>Something</th>
                        </tr>
                        <tr>
                        <td>200mm</td>
                        <td>200mm</td>
                        </tr>
                        <tr>
                        <th>Something</th>
                        <th>Something</th>
                        </tr>
                        <tr>
                        <td>200mm</td>
                        <td>200mm</td>
                        </tr>
                    </table>
                    </div>
                </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
            </th>
            <th>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
            </th>
            <th>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
            </th>
        </tbody>
    </table>,
    <table style="margin-left: -10vh;">
        <tbody>
            <th>
                <div class="wrapper">
                <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                    <div class="left">
                        <div class="details">
                        <h1>Chair</h1>
                        <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                        <h1>Chair</h1>
                        <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                    <table>
                        <tr>
                        <th>Width</th>
                        <th>Height</th>
                        </tr>
                        <tr>
                        <td>3000mm</td>
                        <td>4000mm</td>
                        </tr>
                        <tr>
                        <th>Something</th>
                        <th>Something</th>
                        </tr>
                        <tr>
                        <td>200mm</td>
                        <td>200mm</td>
                        </tr>
                        <tr>
                        <th>Something</th>
                        <th>Something</th>
                        </tr>
                        <tr>
                        <td>200mm</td>
                        <td>200mm</td>
                        </tr>
                        <tr>
                        <th>Something</th>
                        <th>Something</th>
                        </tr>
                        <tr>
                        <td>200mm</td>
                        <td>200mm</td>
                        </tr>
                    </table>
                    </div>
                </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
            </th>
            <th>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
            </th>
            <th>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="qlqwa">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                        <div class="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -200 776 712">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                            </svg>
                        </div>
                        </div>
                        <div class="right">
                        <div class="done">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 648 512">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                        </div>
                        <div class="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 584 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="inside">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: -4vh; color: white;">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                    </div>
                    <div class="contents">
                        <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                </div>
            </th>
        </tbody>
    </table>,
]
const size_items = Items.length

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: colors.red.A400,
    },
  },
});

function App() {

  let teams = [
    <p>Dallas</p>,
    <p>Chicago</p>,
    <p>Texas</p>,
    <p>Bulls</p>,
  ]

  let page = 0;

  function updateDOM(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    document.getElementById(`page${page+1}`).style.display = 'block';
  }

  return (
    <Stack spacing={2}>
      <Pagination count={size_items} variant="outlined" shape="rounded" onChange={(e, p) => {
        page = p - 1
        updateDOM(page);
      }}/>
    </Stack>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.
    location.href = `../music.html#page${page + 1}`
    console.log(Items[page].props.children.props.children.map((p) => p.props.children.map((c) => c.props))) */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
);

updateDOM()