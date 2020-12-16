import styled from 'styled-components';

interface Props {
    boxWidth?: string; // box 크기
}

export const GridItem = styled.div<Props>`
    .slick-slider {
        .slick-dots {
            margin: 15px 0 0;
            text-align: center;

            li {
                display: inline-block;

                &.slick-active button {
                    border-color: #185cbe;
                    background: #185cbe;
                }

                & + li {
                    margin: 0 0 0 10px;
                }

                button {
                    width: 30px;
                    padding: 5px 0 0;
                    border-radius: 20px;
                    font-size: 0;
                }
            }
        }

        .slick-slide {
            width: ${(props) => props.boxWidth && props.boxWidth};
            margin: 0 15px;
        }
    }
`;
