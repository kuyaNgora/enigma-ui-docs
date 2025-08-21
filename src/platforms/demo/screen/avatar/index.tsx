import { Avatar } from "@/components/ui";
import { PropsTable } from "../../component/props.table";
import { CodeBlock } from "../../component/codeblock";
import { avatarGroupProps, avatarProps, exampleUsageCode } from "./props";

const AvatarExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Avatar</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Avatar component displays user profile pictures, initials, or
        placeholder content. Use `Avatar.Group` to display avatars together.
      </p>

      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-4">Avatar</h4>
        <PropsTable rows={avatarProps} />
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-4">Avatar.Group</h4>
        <PropsTable rows={avatarGroupProps} />
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>

        <Avatar
          src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
          size="sm"
        />

        <Avatar.Group>
          <Avatar
            src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
            size="sm"
          />
          <Avatar
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            size="sm"
          />
          <Avatar
            src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
            size="sm"
          />
          <Avatar placeholder size="sm">
            JD
          </Avatar>
        </Avatar.Group>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default AvatarExample;
