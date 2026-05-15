<?php
declare(strict_types=1);

// Kitsu SDK base feature

class KitsuBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(KitsuContext $ctx, array $options): void {}
    public function PostConstruct(KitsuContext $ctx): void {}
    public function PostConstructEntity(KitsuContext $ctx): void {}
    public function SetData(KitsuContext $ctx): void {}
    public function GetData(KitsuContext $ctx): void {}
    public function GetMatch(KitsuContext $ctx): void {}
    public function SetMatch(KitsuContext $ctx): void {}
    public function PrePoint(KitsuContext $ctx): void {}
    public function PreSpec(KitsuContext $ctx): void {}
    public function PreRequest(KitsuContext $ctx): void {}
    public function PreResponse(KitsuContext $ctx): void {}
    public function PreResult(KitsuContext $ctx): void {}
    public function PreDone(KitsuContext $ctx): void {}
    public function PreUnexpected(KitsuContext $ctx): void {}
}
