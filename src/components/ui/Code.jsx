import { skills } from "../../../data/data-skills";
import { tools } from "../../../data/data-tools";
import CodeItem from "./CodeItem";
import { ColoredText } from '../../styled-components/ColoredText';
import { MarginContainer } from '../../styled-components/MarginContainer';
import CodeContainer from "./CodeContainer";


function Code() {
  const renderItems = (items, color) =>
    items.slice(0, 7).map((item, index) => (
      <CodeItem key={index} name={item.name || item} index={index} color={color} />
    ));

  return (
    <CodeContainer>
      <code>
        <div style={{paddingTop :`20px`}}>
          <ColoredText color="var(--main-color)">const</ColoredText>
          <ColoredText color="var(--color-white)">SoftwareEngineering</ColoredText>{' '}
          <ColoredText color="var(--main-color)">=</ColoredText>{' '}
          <ColoredText color="var(--color-gray)">{'{'}</ColoredText>
        </div>

        <MarginContainer>
          <ColoredText color="var(--color-white)">name:</ColoredText>{' '}
          <ColoredText color="var(--color-dark-orange)">t&apos;Yasmin Muntasert&apos;</ColoredText>
          <ColoredText color="var(--color-gray)">,</ColoredText>
        </MarginContainer>

        <MarginContainer>
          <ColoredText color="var(--color-white)">tittle:</ColoredText>{' '}
          <ColoredText color="var(--color-dark-orange)">&apos;Software Engineering&apos;</ColoredText>
          <ColoredText color="var(--color-gray)">,</ColoredText>
        </MarginContainer>
        

        <MarginContainer>
          <ColoredText color="var(--color-white)">skills:</ColoredText>{' '}
          <ColoredText color="var(--color-gray)">[</ColoredText>
          {renderItems(skills, "var(--color-dark-orange)")}
          <ColoredText color="var(--color-gray)">]</ColoredText>
          <ColoredText color="var(--color-gray)">,</ColoredText>
        </MarginContainer>

        <MarginContainer>
          <ColoredText color="var(--color-white)">tools:</ColoredText>{' '}
          <ColoredText color="var(--color-gray)">[</ColoredText>
          {renderItems(tools, "var(--color-dark-orange)")}
          <ColoredText color="var(--color-gray)">]</ColoredText>
          <ColoredText color="var(--color-gray)">,</ColoredText>
        </MarginContainer>

        <MarginContainer>
          <ColoredText color="var(--color-white)">hardWorker:</ColoredText>{' '}
          <ColoredText color="var(--color-dark-orange)">true</ColoredText>
          <ColoredText color="var(--color-gray)">,</ColoredText>
        </MarginContainer>

        <MarginContainer>
          <ColoredText color="var(--color-white)">quickLearner:</ColoredText>{' '}
          <ColoredText color="var(--color-dark-orange)">true</ColoredText>
          <ColoredText color="var(--color-gray)">,</ColoredText>
        </MarginContainer>

        <MarginContainer>
          <ColoredText color="var(--color-white)">problemSolver:</ColoredText>{' '}
          <ColoredText color="var(--color-dark-orange)">true</ColoredText>
          <ColoredText color="var(--color-gray)">,</ColoredText>
        </MarginContainer>

        <MarginContainer>
          <ColoredText color="var(--color-green)">employable:</ColoredText>{' '}
          <ColoredText color="var(--color-dark-orange)">function</ColoredText>
          <ColoredText color="var(--color-gray)">() {'{'}</ColoredText>
        </MarginContainer>

        <MarginContainer margin="40px">
          <ColoredText color="var(--color-dark-orange)">return</ColoredText>{' '}
          <ColoredText color="var(--color-gray)">(</ColoredText>
          <div>
          <ColoredText color="var(--color-white)">this.hardWorker</ColoredText>{' '}
          <ColoredText color="var(--color-dark-orange)">&amp;&amp;</ColoredText>{' '}
          </div>

          <div>
          <ColoredText color="var(--color-white)">this.problemSolver</ColoredText>{' '}
          <ColoredText color="var(--color-dark-orange)">&amp;&amp;</ColoredText>{' '}
          </div>

          <div>
          <ColoredText color="var(--color-white)">this.skills.length</ColoredText>{' '}
          <ColoredText color="var(--color-dark-orange)">&gt;=</ColoredText>{' '}
          <ColoredText color="var(--color-dark-orange)">{skills.length}</ColoredText>
          </div>

          <ColoredText color="var(--color-gray)">)</ColoredText>
        </MarginContainer>

        <MarginContainer margin="30px" color="var(--color-gray)">{'}'}</MarginContainer>
        <MarginContainer margin="20px"color="var(--color-gray)">{'}'}</MarginContainer>
      </code>
    </CodeContainer>
  );
}

export default Code;

