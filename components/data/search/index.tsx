import { usePassword } from "src/contexts/PasswordContext"

import * as S from "./style"

export function Search() {
  const { setSearch } = usePassword()

  return (
    <S.Search>
      <input
        id="search"
        type="text"
        placeholder="Pesquisar no meu cofre"
        maxLength={45}
        onChange={(e) => setSearch && setSearch(e.target.value)}
      />

      <label htmlFor="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g>
            <g>
              <g>
                <path d="M8.91 1.806c4.063.646 6.414 5.176 4.585 8.833-2.326 4.65-8.834 4.653-11.158.004C.112 6.19 3.958 1.02 8.91 1.806M7.068.058l-.39.056C1.843.808-1.235 6.036.478 10.642c1.844 4.953 7.944 6.793 12.123 3.657l.253-.19 2.884 2.873c1.84 1.833 2.935 2.897 3.026 2.938a.835.835 0 0 0 1.195-.712c.025-.436.13-.315-2.997-3.452l-2.875-2.883.095-.117c2.669-3.256 1.98-8.497-1.456-11.1C11.119.439 8.846-.204 7.068.058" />
              </g>
            </g>
          </g>
        </svg>
      </label>
    </S.Search>
  );
}
