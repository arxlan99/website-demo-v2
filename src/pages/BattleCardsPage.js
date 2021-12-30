import Dropdown from "../components/Dropdown";
import Layout from "../components/Layout";
import "./BattleCards.css";
import RichText from "../components/RichText";

const BattleCardsPage = () => {
  return (
    <div>
      <Layout>
        <div className="battleCards__header">
          <Dropdown
            title="Company Name"
            contentArray={["Company1", "Company1", "Company1"]}
          />
        </div>
        <div className="battleCards__textareaContainer">
          <div>
            <RichText placeholder={"Value"} />
          </div>
          <div>
            <RichText placeholder={"Value"} />
          </div>
          <div>
            <RichText placeholder={"Value"} />
          </div>
          <div>
            <RichText placeholder={"Value"} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BattleCardsPage;
