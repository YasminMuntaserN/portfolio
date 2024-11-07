import {skills} from "../../../data/data-skills";
import {tools} from "../../../data/data-tools";
import Bubbles from './bubbles';
import CodeItem from "./CodeItem";

function Code() {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12">
      <div className="card-skills object-card">
        <Bubbles />
        <code>
          <div>
            <span className="text-purple">const</span>
            <span className="text-white"> SwoftwareEnginering </span>
            <span className="text-purple">=</span>
            <span className="text-gray"> {'{'} </span>
          </div>
          <div className="m-l-20">
            <span className="text-white">name:</span>
            <span className="text-gray">&apos;</span>
            <span className="text-orange">Yasmin Muntaser</span>
            <span className="text-gray">&apos;</span>
            <span className="text-gray">,</span>
          </div>
          <div className="m-l-20">
            <span className="text-white">title:</span>
            <span className="text-gray">&apos;</span>
            <span className="text-orange">Swoftware Enginering</span>
            <span className="text-gray">&apos;</span>
            <span className="text-gray">,</span>
          </div>
          <div className="m-l-20">
            <span className="text-white">skills:</span>
            <span className="text-gray">[</span>
              {skills.slice(0, 5).map((skill, index) =>(<CodeItem name={skill} index={index} key={index}/>))}
            <span className="text-gray">]</span>
          </div>
          <div className="m-l-20">
            <span className="text-white">tools:</span>
            <span className="text-gray">[</span>
              {tools.slice(0, 5).map((tool, index) =>(<CodeItem name={tool} index={index} key={index}/>))}
            <span className="text-gray">]</span>
          </div>
          <div className="m-l-20">
            <span className="text-white">hardWorker:</span>
            <span className="text-orange">true</span>
            <span className="text-gray">,</span>
          </div>
          <div className="m-l-20">
            <span className="text-white">quickLearner:</span>
            <span className="text-orange">true</span>
            <span className="text-gray">,</span>
          </div>
          <div className="m-l-20">
            <span className="text-white">problemSolver:</span>
            <span className="text-orange">true</span>
            <span className="text-gray">,</span>
          </div>
          <div className="m-l-20">
            <span className="text-green">employable:</span>
            <span className="text-orange">function</span>
            <span className="text-gray">() {'{'}</span>
          </div>
          <span className="m-l-40 text-orange">return</span>
          <span className="text-gray">(</span>
          <div className="m-l-60">
            <span className="text-cyan">this.</span>
            <span className="text-white">hardWorker</span>
            <span className="text-orange"> && </span>
          </div>
          <div className="m-l-60">
            <span className="text-cyan">this.</span>
            <span className="text-white">problemSolver</span>
            <span className="text-orange"> && </span>
          </div>
          <div className="m-l-60">
            <span className="text-cyan">this.</span>
            <span className="text-white">skills.length</span>
            <span className="text-orange"> &gt;= </span>
            <span className="text-orange">{skills.length}</span>
          </div>
          <span className="m-l-60 text-gray">);</span>
          <div className="text-gray m-l-40">{'}'}</div>
          <div className="text-gray m-l-20">{'}'}</div>
        </code>
      </div>
    </div>
  );
}

export default Code;