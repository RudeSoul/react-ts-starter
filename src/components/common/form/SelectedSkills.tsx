import React from 'react';
import { MdClose } from 'react-icons/md';

interface Skill {
  name: string;
  id: string;
  skillCategory: {
    name: string;
  };
}

interface Props {
  skills: Skill[];
  onDeleteClick: (name: string, skill: Skill) => void;
  disabled?: boolean;
}

const SelectedSkills = (props: Props) => {
  const { skills, onDeleteClick, disabled } = props;

  return (
    <div className="selected-skills">
      {skills.map(skill => (
        <div className="selected-skill" key={skill.id}>
          <span>{skill.name}</span>
          <button
            type="button"
            onClick={() => {
              onDeleteClick(skill.skillCategory.name, skill);
            }}
            disabled={disabled}
          >
            <MdClose size={15} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedSkills;
