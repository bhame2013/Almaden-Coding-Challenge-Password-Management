import styled from "styled-components"

export const Folder = styled.div`
  h4 {
    color: #4d5e6e;
    font-size: 15px;
    position: relative;
    border-bottom: 1px solid #d2d4d5;
    padding-bottom: 10px;
    margin-bottom: 20px;
    width: 100%;
    font-weight: 400;
    display: flex;
    gap: 5px;

    span {
      max-width: calc(100% - 80px);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }
  }

  .list-passwords {
    display: flex;
    flex-wrap: wrap;
    gap: 25px 15px;
    padding: 0 20px;
    margin-bottom: 40px;
  }
`
