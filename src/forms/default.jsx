import { defineMessages } from 'react-intl';
import osteoInventoryInput from '../components/osteoInventoryInput';

const messages = defineMessages({
  affirmComplete: {
    id: 'form.osteology.default.affirmComplete',
    defaultMessage: 'By checking this box, I am affirming that the inventory of this individual is complete and that any and all unfilled boxes on this form indicate confirmation that those elements (or portions thereof, or features) are not present for this individual.',
  },
});

const template = (configContext) => {
  const {
    FormattedMessage,
    React,
  } = configContext.lib;

  const OsteoInventoryInput = osteoInventoryInput(configContext);

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Row>
          <Field name="InventoryID" />
          <Col />
        </Row>

        <Field name="osteoAgeEstimateGroupList">
          <Field name="osteoAgeEstimateGroup">
            <Field name="osteoAgeEstimateVerbatim" />
            <Field name="osteoAgeEstimateLower" />
            <Field name="osteoAgeEstimateUpper" />
            <Field name="osteoAgeEstimateDateGroup" />
            <Field name="osteoAgeEstimateAnalyst" />
            <Field name="osteoAgeEstimateNote" />
          </Field>
        </Field>

        <Field name="sexDeterminationGroupList">
          <Field name="sexDeterminationGroup">
            <Field name="sexDetermination" />
            <Field name="sexDeterminationDateGroup" />
            <Field name="sexDeterminationAnalyst" />
            <Field name="sexDeterminationNote" />
          </Field>
        </Field>

        <InputTable name="completeness">
          <Field name="completeness" />
          <Field name="completenessNote" />
        </InputTable>

        <InputTable name="dentition">
          <Field name="molarsPresent" />
          <Field name="dentitionScore" />
          <Field name="dentitionNote" />
        </InputTable>

        <Row>
          <InputTable name="mortuaryTreatment">
            <Field name="mortuaryTreatment" />
            <Field name="mortuaryTreatmentNote" />
          </InputTable>

          <InputTable name="behrensmeyer">
            <Field name="behrensmeyerSingleLower" />
            <Field name="behrensmeyerUpper" />
          </InputTable>
        </Row>

        <Panel name="inventory" collapsible collapsed>
          <OsteoInventoryInput />
        </Panel>

        <Row>
          <Col>
            <Field name="NotesOnElementInventory" />
            <Field name="pathologyNote" />
          </Col>

          <Col>
            <Field name="InventoryIsComplete" />

            <div style={{ marginBottom: '8px' }}>
              <FormattedMessage {...messages.affirmComplete} />
            </div>

            <Row>
              <Field name="inventoryAnalyst" />
              <Field name="inventoryDate" />
            </Row>
          </Col>
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.osteology.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
