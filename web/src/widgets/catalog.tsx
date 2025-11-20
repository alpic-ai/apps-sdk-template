import "@/index.css";

import { useState } from "react";
import { mountWidget } from "skybridge/web";
import { AppsSDKUIProvider } from "@openai/apps-sdk-ui/components/AppsSDKUIProvider";

// Import all components
import { Alert } from "@openai/apps-sdk-ui/components/Alert";
import { Avatar, AvatarGroup } from "@openai/apps-sdk-ui/components/Avatar";
import { Badge } from "@openai/apps-sdk-ui/components/Badge";
import { Button, ButtonLink, CopyButton } from "@openai/apps-sdk-ui/components/Button";
import { Checkbox } from "@openai/apps-sdk-ui/components/Checkbox";
import { CodeBlock } from "@openai/apps-sdk-ui/components/CodeBlock";
import * as Icons from "@openai/apps-sdk-ui/components/Icon";
import { Image } from "@openai/apps-sdk-ui/components/Image";
import { CircularProgress, LoadingDots, LoadingIndicator } from "@openai/apps-sdk-ui/components/Indicator";
import { Input } from "@openai/apps-sdk-ui/components/Input";
import { Markdown } from "@openai/apps-sdk-ui/components/Markdown";
import { Menu } from "@openai/apps-sdk-ui/components/Menu";
import { Popover } from "@openai/apps-sdk-ui/components/Popover";
import { RadioGroup } from "@openai/apps-sdk-ui/components/RadioGroup";
import { SegmentedControl } from "@openai/apps-sdk-ui/components/SegmentedControl";
import { Select } from "@openai/apps-sdk-ui/components/Select";
import { SelectControl } from "@openai/apps-sdk-ui/components/SelectControl";
import { ShimmerText } from "@openai/apps-sdk-ui/components/ShimmerText";
import { Slider } from "@openai/apps-sdk-ui/components/Slider";
import { Switch } from "@openai/apps-sdk-ui/components/Switch";
import { TagInput } from "@openai/apps-sdk-ui/components/TagInput";
import { Textarea } from "@openai/apps-sdk-ui/components/Textarea";
import { TextLink } from "@openai/apps-sdk-ui/components/TextLink";
import { Tooltip } from "@openai/apps-sdk-ui/components/Tooltip";

function ComponentCatalog() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [sliderValue, setSliderValue] = useState(50);
  const [radioValue, setRadioValue] = useState("option1");
  const [selectValue, setSelectValue] = useState("");
  const [tags, setTags] = useState<{ value: string; valid: boolean }[]>([
    { value: "react", valid: true },
    { value: "typescript", valid: true },
  ]);
  const [segmentValue, setSegmentValue] = useState("tab1");

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">OpenAI Apps SDK UI Component Catalog</h1>
        <p className="mt-2 text-gray-600">Comprehensive showcase of all available components</p>
      </div>

      {/* Alert */}
      <Section title="Alert">
        <div className="space-y-4">
          <Alert color="info" title="Info Alert" description="This is an informational alert message." />
          <Alert color="success" title="Success Alert" description="This is a success alert message." />
          <Alert color="warning" title="Warning Alert" description="This is a warning alert message." />
          <Alert color="danger" title="Error Alert" description="This is an error alert message." />
        </div>
      </Section>

      {/* Avatar & AvatarGroup */}
      <Section title="Avatar & AvatarGroup">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar name="John Doe" />
            <Avatar name="Jane Smith" size={32} />
            <Avatar name="Bob Johnson" size={48} />
            <Avatar imageUrl="https://i.pravatar.cc/150?img=1" name="Avatar with image" />
          </div>
          <AvatarGroup>
            <Avatar name="User 1" />
            <Avatar name="User 2" />
            <Avatar name="User 3" />
            <Avatar name="User 4" />
            <Avatar name="User 5" />
          </AvatarGroup>
        </div>
      </Section>

      {/* Badge */}
      <Section title="Badge">
        <div className="flex flex-wrap gap-2">
          <Badge color="secondary">Default</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="discovery">Discovery</Badge>
        </div>
      </Section>

      {/* Buttons */}
      <Section title="Button, ButtonLink, CopyButton">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button color="secondary">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="success">Success</Button>
            <Button color="danger">Danger</Button>
            <Button color="secondary" variant="ghost">
              Ghost
            </Button>
            <Button color="secondary" disabled>
              Disabled
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button color="secondary" size="sm">
              Small
            </Button>
            <Button color="secondary" size="md">
              Medium
            </Button>
            <Button color="secondary" size="lg">
              Large
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <ButtonLink href="#" color="primary">
              Button Link
            </ButtonLink>
            <CopyButton color="secondary" copyValue="Hello, World!">
              Copy
            </CopyButton>
          </div>
        </div>
      </Section>

      {/* Checkbox */}
      <Section title="Checkbox">
        <div className="space-y-2">
          <Checkbox checked={checkboxValue} onCheckedChange={setCheckboxValue} label="Checkbox option" />
          <Checkbox checked={false} onCheckedChange={() => {}} label="Unchecked option" />
          <Checkbox checked={true} onCheckedChange={() => {}} label="Checked option" disabled />
          <Checkbox checked={false} onCheckedChange={() => {}} label="Disabled option" disabled />
        </div>
      </Section>

      {/* CodeBlock */}
      <Section title="CodeBlock">
        <CodeBlock language="typescript">
          {`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet("World");
console.log(message);`}
        </CodeBlock>
      </Section>

      {/* Image */}
      <Section title="Image">
        <div className="flex gap-4">
          <Image src="https://picsum.photos/200/200" alt="Sample image" width={200} height={200} />
          <Image src="https://picsum.photos/300/200" alt="Wide image" width={300} height={200} />
        </div>
      </Section>

      {/* Indicator */}
      <Section title="Indicator (Loading Components)">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <CircularProgress size="sm" />
            <span className="text-xs">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CircularProgress size="md" />
            <span className="text-xs">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CircularProgress size="lg" />
            <span className="text-xs">Large</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LoadingDots />
            <span className="text-xs">Loading Dots</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LoadingIndicator />
            <span className="text-xs">Loading Indicator</span>
          </div>
        </div>
      </Section>

      {/* Input */}
      <Section title="Input">
        <div className="max-w-md space-y-4">
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter text..." />
          <Input value="" onChange={() => {}} placeholder="Disabled input" disabled />
          <Input value="" onChange={() => {}} placeholder="With error" invalid />
          <Input value="" onChange={() => {}} placeholder="Soft variant" variant="soft" />
        </div>
      </Section>

      {/* Markdown */}
      <Section title="Markdown">
        <Markdown>
          {`# Heading 1
## Heading 2
### Heading 3

This is a **bold** text and this is *italic*.

- List item 1
- List item 2
- List item 3

\`\`\`javascript
console.log("Code block");
\`\`\`

[Link example](https://example.com)`}
        </Markdown>
      </Section>

      {/* Menu */}
      <Section title="Menu">
        <Menu>
          <Menu.Trigger>
            <Button color="secondary">Open Menu</Button>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item onSelect={() => console.log("Option 1")}>Option 1</Menu.Item>
            <Menu.Item onSelect={() => console.log("Option 2")}>Option 2</Menu.Item>
            <Menu.Separator />
            <Menu.Item disabled>Option 3 (Disabled)</Menu.Item>
            <Menu.Item onSelect={() => console.log("Delete")}>Delete</Menu.Item>
          </Menu.Content>
        </Menu>
      </Section>

      {/* Popover */}
      <Section title="Popover">
        <Popover>
          <Popover.Trigger>
            <Button color="secondary">Open Popover</Button>
          </Popover.Trigger>
          <Popover.Content>
            <div className="p-4">
              <h3 className="mb-2 font-semibold">Popover Title</h3>
              <p className="text-sm text-gray-600">This is the popover content. It can contain any React elements.</p>
            </div>
          </Popover.Content>
        </Popover>
      </Section>

      {/* RadioGroup */}
      <Section title="RadioGroup">
        <RadioGroup value={radioValue} onChange={setRadioValue} aria-label="Radio options">
          <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
          <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
          <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
          <RadioGroup.Item value="option4" disabled>
            Option 4 (Disabled)
          </RadioGroup.Item>
        </RadioGroup>
      </Section>

      {/* SegmentedControl */}
      <Section title="SegmentedControl">
        <SegmentedControl value={segmentValue} onChange={setSegmentValue} aria-label="Segmented control options">
          <SegmentedControl.Option value="tab1">Tab 1</SegmentedControl.Option>
          <SegmentedControl.Option value="tab2">Tab 2</SegmentedControl.Option>
          <SegmentedControl.Option value="tab3">Tab 3</SegmentedControl.Option>
        </SegmentedControl>
      </Section>

      {/* Select */}
      <Section title="Select">
        <div className="max-w-md">
          <Select
            value={selectValue}
            onChange={(option) => setSelectValue(option.value)}
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
              { value: "option4", label: "Option 4" },
            ]}
            placeholder="Select an option"
          />
        </div>
      </Section>

      {/* SelectControl */}
      <Section title="SelectControl">
        <div className="max-w-md">
          <SelectControl selected={!!selectValue}>{selectValue || "Select Control Example"}</SelectControl>
        </div>
      </Section>

      {/* ShimmerText */}
      <Section title="ShimmerText">
        <ShimmerText>This text has a shimmer effect!</ShimmerText>
      </Section>

      {/* Slider */}
      <Section title="Slider">
        <div className="max-w-md space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Value: {sliderValue}</label>
            <Slider value={sliderValue} onChange={setSliderValue} min={0} max={100} step={1} />
          </div>
          <Slider value={25} onChange={() => {}} min={0} max={100} step={1} disabled />
        </div>
      </Section>

      {/* Switch */}
      <Section title="Switch">
        <div className="space-y-2">
          <Switch checked={switchValue} onCheckedChange={setSwitchValue} label="Toggle switch" />
          <Switch checked={false} onCheckedChange={() => {}} label="Unchecked switch" />
          <Switch checked={true} onCheckedChange={() => {}} label="Checked (disabled)" disabled />
          <Switch checked={false} onCheckedChange={() => {}} label="Unchecked (disabled)" disabled />
        </div>
      </Section>

      {/* TagInput */}
      <Section title="TagInput">
        <div className="max-w-md">
          <TagInput value={tags} onChange={setTags} placeholder="Add tags..." id="tag-input-demo" />
        </div>
      </Section>

      {/* Textarea */}
      <Section title="Textarea">
        <div className="max-w-md space-y-4">
          <Textarea
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            placeholder="Enter multi-line text..."
            rows={4}
          />
          <Textarea value="" onChange={() => {}} placeholder="Disabled" disabled rows={3} />
          <Textarea value="" onChange={() => {}} placeholder="Soft variant" variant="soft" rows={3} />
        </div>
      </Section>

      {/* TextLink */}
      <Section title="TextLink">
        <div className="space-x-4">
          <TextLink href="#">Default Link</TextLink>
          <TextLink href="#" external>
            External Link
          </TextLink>
        </div>
      </Section>

      {/* Tooltip */}
      <Section title="Tooltip">
        <div className="flex gap-4">
          <Tooltip content="This is a tooltip">
            <Button color="secondary">Hover me</Button>
          </Tooltip>
          <Tooltip content="Tooltip on top" side="top">
            <Button color="secondary">Top</Button>
          </Tooltip>
          <Tooltip content="Tooltip on right" side="right">
            <Button color="secondary">Right</Button>
          </Tooltip>
          <Tooltip content="Tooltip on bottom" side="bottom">
            <Button color="secondary">Bottom</Button>
          </Tooltip>
          <Tooltip content="Tooltip on left" side="left">
            <Button color="secondary">Left</Button>
          </Tooltip>
        </div>
      </Section>

      {/* Additional Icon Showcase */}
      <Section title="Icon Library Showcase (More Examples)">
        <div className="grid grid-cols-10 gap-4">
          {[
            Icons.Archive,
            Icons.Bell,
            Icons.Book,
            Icons.Calendar,
            Icons.Camera,
            Icons.Chart,
            Icons.Chat,
            Icons.Check,
            Icons.ChevronDown,
            Icons.ChevronLeft,
            Icons.ChevronRight,
            Icons.ChevronUp,
            Icons.Clock,
            Icons.Code,
            Icons.Copy,
            Icons.Delete,
            Icons.Download,
            Icons.Edit,
            Icons.Email,
            Icons.ExternalLink,
            Icons.Eye,
            Icons.File,
            Icons.Filter,
            Icons.Flag,
            Icons.Folder,
            Icons.Globe,
            Icons.Heart,
            Icons.Help,
            Icons.Home,
            Icons.ImageSquare,
            Icons.Info,
            Icons.Link,
            Icons.Lock,
            Icons.Mail,
            Icons.Menu,
            Icons.Mic,
            Icons.Moon,
            Icons.Paperclip,
            Icons.Pause,
            Icons.Pencil,
            Icons.Phone,
            Icons.Play,
            Icons.Plus,
            Icons.Question,
            Icons.Reload,
            Icons.Search,
            Icons.Settings,
            Icons.Share,
            Icons.Star,
            Icons.Sun,
            Icons.Tag,
            Icons.Terminal,
            Icons.Trash,
            Icons.UploadDocuments,
            Icons.User,
            Icons.Video,
            Icons.Warning,
            Icons.X,
          ].map((IconComponent, idx) => (
            <Tooltip key={idx} content={IconComponent.name || `Icon ${idx}`}>
              <div className="flex h-10 w-10 items-center justify-center rounded border border-gray-200 hover:bg-gray-50">
                <IconComponent className="h-5 w-5" />
              </div>
            </Tooltip>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Helper component for sections
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h2>
      {children}
    </div>
  );
}

// Wrap with AppsSDKUIProvider
const CatalogWithProvider = () => (
  <AppsSDKUIProvider linkComponent="a">
    <ComponentCatalog />
  </AppsSDKUIProvider>
);

export default CatalogWithProvider;

mountWidget(<CatalogWithProvider />);
